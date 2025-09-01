import SectionHeadings from "@components/SectionHeadings";

function Cards({ data, Card, cardStyles, buttonStyles, imageSizeClass }) {
  const items = data.list?.items || [];
  const fullRows = Math.floor(items.length / 4);
  const remainingItems = items.length % 4;
  const remainingColumnsClass = "grid-cols-" + remainingItems;
  return (
    <div className="section_y_padding">
      <div className="app_container">
        <SectionHeadings
          title={data.list?.title}
          subtitle={data.list?.subtitle}
        />
        <div className="flex flex-col gap-4">
          {/* Full rows of 4 */}
          {Array.from({ length: fullRows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="grid place-items-stretch lg:grid-cols-4 md:grid-cols-2 gap-4"
            >
              {items.slice(rowIndex * 4, (rowIndex + 1) * 4).map((item, i) => (
                <Card
                  key={i + rowIndex * 4}
                  item={item}
                  cardStyles={cardStyles}
                  buttonStyles={buttonStyles || ""}
                  imageSizeClass={imageSizeClass}
                />
              ))}
            </div>
          ))}

          {/* Remaining items */}
          {remainingItems > 0 && (
            <div className="flex justify-center">
              <div className={`grid md:${remainingColumnsClass} gap-4`}>
                {items.slice(fullRows * 4).map((item, i) => (
                  <Card
                    key={i + fullRows * 4}
                    item={item}
                    cardStyles={cardStyles || ""}
                    buttonStyles={buttonStyles || ""}
                    imageSizeClass={imageSizeClass}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;
