"use client";
import { useControls, button } from "leva";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const templateOptions = {
  "Woman Pointing": "woman-pointing",
};

const defaultTexts = ["Text 1", "Text 2", "Text 3", "Text 4"];

const Page = () => {
  //const [imageUrl, setImageUrl] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const [template, setTemplate] = useState<string>(
    searchParams.get("template") || templateOptions["Woman Pointing"]
  );
  const [text1, setText1] = useState<string>(
    searchParams.getAll("text")[0] || defaultTexts[0]
  );
  const [text2, setText2] = useState<string>(
    searchParams.getAll("text")[1] || defaultTexts[1]
  );
  const [text3, setText3] = useState<string>(
    searchParams.getAll("text")[2] || defaultTexts[2]
  );
  const [text4, setText4] = useState<string>(
    searchParams.getAll("text")[3] || defaultTexts[3]
  );
  const [includeQr, setIncludeQr] = useState<boolean>(true);

  const query = new URLSearchParams({
    template: template,
  });
  query.append("text", text1);
  query.append("text", text2);
  query.append("text", text3);
  query.append("text", text4);
  if(includeQr) query.append("qr", 'true');
  const imageUrl = `/api/generate-poster?${query}`;

  // const generate = async (template: string, text1: string, text2: string, text3: string, text4: string) => {
  //   setImageUrl(null);
  //   const query = new URLSearchParams({
  //     template: template,
  //   });
  //   query.append('text', text1);
  //   query.append('text', text2);
  //   query.append('text', text3);
  //   query.append('text', text4);
  //   setImageUrl(`/api/generate-poster?${query}`);
  // }

  // useEffect(() => {
  //   generate(templateOptions['Woman Pointing'], defaultTexts[0], defaultTexts[1], defaultTexts[2], defaultTexts[3]);
  // }, []);

  const values = useControls(
    {
      template: {
        value: template,
        options: templateOptions,
      },
      text1: text1,
      text2: text2,
      text3: text3,
      text4: text4,
      includeQr: {
        value: includeQr,
        label: "Add QR",
      },
      generate: button(async (get) => {
        setTemplate(get("template"));
        setText1(get("text1"));
        setText2(get("text2"));
        setText3(get("text3"));
        setText4(get("text4"));
        setIncludeQr(get("includeQr"));
      }),
      download: button(async () => {
        if (imageUrl) {
          console.log("Downloading", imageUrl);
          const a = document.createElement("a");
          a.href = imageUrl;
          a.download = "poster.png";
          a.setAttribute("download", "poster.png");
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }),
    },
    [imageUrl, template, text1, text2, text3, text4, includeQr]
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "contain",
          overflow: "visible",
          backgroundRepeat: "repeat",
        }}
      ></div>
    </>
  );
};

export default Page;
