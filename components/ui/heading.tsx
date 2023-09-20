interface HeadingProps {
  title: string;
  description: string;
}
const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tighter sm:text-xl py-2">{title}</h2>
      <p className="text-sm text-muted-foreground pb-2">{description}</p>
    </div>
  );
};

export default Heading;
