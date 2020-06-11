import React from "react";

interface Props {
  currentPage: number;
  setCurrentPage(page: number): void;
  per_page: number;
  total_count: number;
}

const Paginator: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  per_page,
  total_count,
}) => {
  const boxPageButton = (key: number, value: any) => {
    let selected = value === currentPage ? "border-2 border-info" : "";
    return (
      <button
        key={key}
        className={`mx-1 btn btn-primary rounded ${selected}`}
        onClick={value === "..." ? () => null : () => setCurrentPage(value)}
      >
        {value}
      </button>
    );
  };

  const loadButtons = () => {
    /** Load the buttons for each page */
    let buttons = [];
    for (let i = 0; i < Math.ceil(total_count / per_page); i++) {
      buttons.push(boxPageButton(i, i + 1));
    }

    let last = Math.ceil(total_count / per_page);

    if (buttons.length > 6) {
      if (currentPage + 1 > last - 3) {
        buttons = buttons.slice(last - 5, last);
        buttons.unshift(boxPageButton(-1, "..."));
        buttons.unshift(boxPageButton(0, 1));

        return buttons;
      } else if (currentPage < 5) {
        // Selected elements in range(1, 4)
        buttons = buttons.slice(0, 5);
        buttons.push(boxPageButton(-1, "..."));
        buttons.push(boxPageButton(last, last));
        return buttons;
      } else {
        let chain = [];
        chain.push(boxPageButton(0, 1));
        chain.push(boxPageButton(-1, "..."));

        chain.push(boxPageButton(currentPage - 1, currentPage - 1));
        chain.push(boxPageButton(currentPage, currentPage));
        chain.push(boxPageButton(currentPage + 1, currentPage + 1));

        chain.push(boxPageButton(-2, "..."));
        chain.push(boxPageButton(last, last));

        return chain;
      }
    } else return buttons;
  };

  return <div className="py-2">{loadButtons()}</div>;
};

export default Paginator;
