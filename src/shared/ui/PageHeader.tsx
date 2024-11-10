type Props = {
  title: string;
};

export function PageHeader({ title }: Props) {
  return <div className="font-bold">{title}</div>;
}
