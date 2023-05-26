import ItemPage from "./itemPage";
import React from "react";

import type { Item } from "@/lib/redux/slices/itemSlice";
import data from "@/lib/components/testData";

export function generateStaticParams() {
  return data.map((item: Item) => ({ slug: item.id }));
}

function RootItem({ params }: { params: { slug: string } }) {
  return <ItemPage slug={params.slug} />;
}

export default RootItem;
