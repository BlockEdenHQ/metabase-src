import { YAxisPosition } from "./../types";
import { getLegendColumns } from "./legend";

const defaultColor = "#de4c4f";

const createSeries = ({
  name = "line",
  color = defaultColor,
  yAxisPosition = "left",
}: {
  name?: string;
  color?: string;
  yAxisPosition?: YAxisPosition;
} = {}) => {
  return {
    name,
    color,
    yAxisPosition,
    type: "line" as const,
    data: [] as any,
  };
};

describe("getLegendColumns", () => {
  it("returns no legend items for a single series", () => {
    const series = [createSeries()];
    const { leftColumn, rightColumn } = getLegendColumns(series);

    expect(leftColumn).toHaveLength(0);
    expect(rightColumn).toHaveLength(0);
  });

  it("returns left column items for two series that use a single Y-axis", () => {
    const series = [
      createSeries({ name: "line 1", yAxisPosition: "right" }),
      createSeries({ name: "line 2", yAxisPosition: "right" }),
    ];
    const { leftColumn, rightColumn } = getLegendColumns(series);

    expect(leftColumn).toStrictEqual([
      { color: "#de4c4f", name: "line 1" },
      { color: "#de4c4f", name: "line 2" },
    ]);
    expect(rightColumn).toHaveLength(0);
  });

  it("returns two column multiple series that use both Y-axes", () => {
    const series = [
      createSeries({ name: "line right 1", yAxisPosition: "right" }),
      createSeries({ name: "line right 2", yAxisPosition: "right" }),
      createSeries({ name: "line right 3", yAxisPosition: "right" }),
      createSeries({ name: "line left 1", yAxisPosition: "left" }),
      createSeries({ name: "line left 2", yAxisPosition: "left" }),
    ];
    const { leftColumn, rightColumn } = getLegendColumns(series);

    expect(leftColumn).toStrictEqual([
      { color: "#de4c4f", name: "line left 1" },
      { color: "#de4c4f", name: "line left 2" },
    ]);

    expect(rightColumn).toStrictEqual([
      { color: "#de4c4f", name: "line right 1" },
      { color: "#de4c4f", name: "line right 2" },
      { color: "#de4c4f", name: "line right 3" },
    ]);
  });
});
