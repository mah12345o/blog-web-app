import React from "react";

interface PropsInterface {
  title: string;
  breadcrumbs?: string[];
}

export default function Header({
  title,
  breadcrumbs = ["Home", "Articles"]
}: PropsInterface) {
  return (
    <section>
      <div >
        <div >
          {breadcrumbs?.map((b, i) => (
            <span key={b}>
              {b}
              {i < breadcrumbs.length - 1 ? " / " : ""}
            </span>
          ))}
        </div>

        <h1 >{title}</h1>
      </div>
    </section>
  );
}
