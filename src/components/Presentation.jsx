import AnimatedImage from "@components/AnimatedImage";
import AnimatedParagraph from "@components/AnimatedParagraph";
import SectionTitle from "@components/SectionTitle";

function Presentation({ data }) {
  return (
    <section className="section_b_padding">
      <div className="app_container relative">
        <div className="flex flex-wrap flex-col-reverse lg:flex-row justify-center items-center gap-8">
          {/* Image Section */}
          <div className="min-w-[47%] min-h-[10rem]">
            <AnimatedImage
              images={[data.robotic_how?.image]}
              alt={data.robotic_how?.title}
              styles="bg-bottom bg-accent-500 shadow-sm rounded-sm md:max-w-[600px]"
            />
          </div>

          {/* Text Section */}
          <div>
            <SectionTitle
              styles={"lg:text-start"}
              text={data.robotic_how?.title}
            />
            <ul className="list-disc ps-4 space-y-4">
              {data.robotic_how?.list?.map((item, idx) => (
                <li key={idx} className="text_container_sm">
                  <AnimatedParagraph styles={"text-start"} text={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
