import { useEffect, useState } from "react";
import { ColorBlock, GridSpace, NextButton, TestPageStyled, Text } from "../../styles/pages/TestPage.Styles";

const TestPage: React.FC = () => {
  const [times, setTimes] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [currentAmount, setCurrentAmount] = useState<number>(2);
  const [stageDone, setStageDone] = useState<boolean>(false);
  const [colors, setColors] = useState<string[]>([]);
  const [testFinished, setTestFinished] = useState<boolean>(false);

  const randomizeColors = (): string[] => {
    let temp: string[] = [];

    for (let i = 0; i < currentAmount; i++) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      const RGB: string = `#${randomColor}`;
      temp.push(RGB);
    }

    return temp;
  };

  const pickHandler = () => {
    let timeTaken = performance.now() - startTime;
    setTimes([...times, timeTaken]);
    setStageDone(true);
  };

  const nextStageHandler = () => {
    setStageDone(false);

    if (currentAmount === 22) {
      setTestFinished(true);
    } else {
      setCurrentAmount((prevState) => prevState + 2);
    }
  };

  useEffect(() => {
    let colors = randomizeColors();
    setColors(colors);
    setStartTime(performance.now());
  }, [currentAmount]);

  return (
    <TestPageStyled>
      <Text style={{ visibility: testFinished ? "visible" : "hidden" }}>
        {times.map((measuredTime) => Math.ceil(measuredTime)).join(", ")}
      </Text>
      {colors.length > 0 ? (
        <GridSpace count={Math.ceil(Math.sqrt(currentAmount))}>
          {colors.map((color) => (
            <ColorBlock style={{ backgroundColor: color }} onClick={pickHandler} />
          ))}
        </GridSpace>
      ) : (
        "Loading..."
      )}
      <NextButton style={{ visibility: stageDone ? "visible" : "hidden" }} onClick={nextStageHandler}>
        {currentAmount === 22 ? "Koniec" : "Dalej"}
      </NextButton>
    </TestPageStyled>
  );
};

export default TestPage;
