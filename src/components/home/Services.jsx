import SectionTitle from "@components/SectionTitle";
import ServiceItem from "./ServiceItem";
import AnimatedWrapper from "@components/AnimatedWrapper";
import { loadData } from "@utility/hooks/useDataLoader";
function Services() {
  const { data: services = {} } = loadData("home/services.js", "services");
  return (
    <div className="section_y_padding">
      <div className="app_container">
        <AnimatedWrapper>
          <SectionTitle text={services?.title} />
        </AnimatedWrapper>
        <div className="grid gap-0.5 lg:flex flex-wrap lg:justify-center lg:flex-nowrap">
          {services?.items.map((service, i) => (
            <AnimatedWrapper key={i}>
              <ServiceItem key={i} service={service} />
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
