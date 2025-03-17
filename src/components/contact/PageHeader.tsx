
interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <section className="pt-32 pb-16 bg-accent">
      <div className="container-custom">
        <h1 className="text-center mb-4 font-normal animate-fade-in">{title}</h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto animate-fade-up">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
