interface zone {
  term_id: number;
  slug: string;
  name: string;
  description: string;
}

export async function getZonePosts(slugZone: string) {
  const url1 = `${process.env.WORDPRESS_URL}/wp-json/zoninator/v1/zones`;

  const response1 = await fetch(url1);
  const zones: zone[] = await response1.json();
  const zone: zone = zones.filter((x) => x.slug === slugZone)[0];

  const url2 = `${process.env.WORDPRESS_URL}/wp-json/zoninator/v1/zones/${zone.term_id}/posts`;
  //const response2 = await fetch(url2);
  const response2 = await fetch(url2, {
    next: { revalidate: 1 },
  });
  const posts = await response2.json();

  return posts;
}
