import { loadData } from "@utility/hooks/useDataLoader";
const PrivacyPolicy = () => {
  const { data } = loadData("privacy-policy.js", "privacyPolicy");
  return (
    <div className="pt-28 pb-16 relative">
      <div className="max-w-4xl mx-auto px-5">
        <h1 className="text-3xl font-display font-bold mb-6 text-secondary-900">
          {data?.title}
        </h1>
        <p className="text-secondary-900 mb-6">{data?.effectiveDate}</p>

        <div className="prose prose-lg max-w-none text-secondary-800">
          {data?.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold mt-8 mb-4 text-secondary-900">
                {section.heading}
              </h2>
              <p>{section.content}</p>

              {section.items && (
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <>
                          <strong>{item.label}:</strong> {item.description}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {section.contactInfo && (
                <p className="mt-4">
                  {section.contactInfo.name}
                  <br />
                  {section.contactInfo.address.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                  <a
                    href={section.contactInfo.whatsappLink}
                    className="hover:underline"
                  >
                    {section.contactInfo.whatsapp}
                  </a>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
