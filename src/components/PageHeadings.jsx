function PageHeadings({ title, subtitle }) {
  return (
    <div className="select-none z-10 my-auto w-full overflow-hidden px-2">
      <h1 className="section_text_shadow text-secondary-500 mx-auto text-center font-bold uppercase text-[clamp(2rem,10vw,6rem)] leading-tight">
        {title}
      </h1>
      <h2 className="pb-2 text-primary-600 text-center text-[clamp(1rem,4vw,2rem)]">
        {subtitle}
      </h2>
    </div>
  );
}

export default PageHeadings;
