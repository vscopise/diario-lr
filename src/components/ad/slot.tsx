"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export type GptSlot = {
  divId: string;
  adUnitPath: string;
  sizes: googletag.GeneralSize;
};

type PrebidSlot = {
  code: string;
  mediaTypes: {
    banner: {
      sizes: [number, number][];
    };
  };
  bids: {
    bidder: string;
    params: object;
  }[];
};

type SlotsProps = { slots: GptSlot[] };

export const AdSlot = (props: SlotsProps) => {
  const gptSlots = props.slots;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    googletag.cmd.push(function () {
      const divIds = gptSlots.map((gptSlot) => gptSlot.divId);
      const removeSlots = googletag
        .pubads()
        .getSlots()
        .filter((slot) => {
          return divIds.includes(slot.getSlotElementId());
        });
      if (destroySlots.length > 0) {
        // ページ遷移時にslotを初期化する（destroyする）
        destroySlots(removeSlots);
      }

      const slots = gptSlots.map((gptSlot) => {
        const slot = googletag
          .defineSlot(gptSlot.adUnitPath, gptSlot.sizes, gptSlot.divId)
          ?.addService(googletag.pubads());
        return slot;
      });

      // @ts-ignore
      pbjs.que.push(() => {
        // @ts-ignore
        pbjs.requestBids({
          // Prebidの枠情報
          adUnits: getPrebidSlots(gptSlots),
          // タイムアウト値
          timeout: 2000,
          // Prebidオークション終了後のcallback関数
          bidsBackHandler: function () {
            // @ts-ignore
            pbjs.setTargetingForGPTAsync(divIds);
            googletag.pubads().refresh(slots as googletag.Slot[]);
            divIds.forEach((divId) => googletag.display(divId));
          },
        });
      });
    });
  }, [pathname, searchParams]);
  return <></>;
};

function destroySlots(slots: googletag.Slot[]) {
  googletag.cmd.push(function () {
    googletag.destroySlots(slots);
  });
}

function getPrebidSlots(slots: GptSlot[]): PrebidSlot[] {
  const divIds = slots.map((slot) => slot.divId);
  // SSPのIDを管理する変数
  const allSlots: PrebidSlot[] = [
    {
      code: "div-1",
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 600],
          ],
        },
      },
      bids: [
        {
          bidder: "appnexus",
          params: {
            placementId: 13144370,
          },
        },
      ],
    },
    {
      code: "div-2",
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 250],
          ],
        },
      },
      bids: [
        {
          bidder: "appnexus",
          params: {
            placementId: 13144370,
          },
        },
      ],
    },
  ];

  return allSlots.filter((slot) => divIds.includes(slot.code));
}