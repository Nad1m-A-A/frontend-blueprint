import SectionTitle from "@components/SectionTitle";
import AnimatedWrapper from "@components/AnimatedWrapper";
import SplitGridCard from "./SplitGridCard";

function splitIntoColumns(items, columnsCount) {
  const columns = Array.from({ length: columnsCount }, () => []);
  items.forEach((item, index) => {
    columns[index % columnsCount].push(item);
  });
  return columns;
}

function HairReviews({ data }) {
  const columns = splitIntoColumns(data.treatmentReviews?.items || [], 3);

  return (
    <div className="section_y_padding app_container">
      <AnimatedWrapper>
        <SectionTitle text={data.treatmentReviews?.title} />
      </AnimatedWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-3">
            {column.map((item, i) => (
              <SplitGridCard key={i} {...item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HairReviews;
