import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: `SilkWay Item ${params.id}`,
  };
}

export default function ItemLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
