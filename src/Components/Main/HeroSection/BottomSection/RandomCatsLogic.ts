import { useAppSelector } from "../../../../store/hooks";

const useRandomCats = () => {
  const cats: any[] = useAppSelector((state) => state.app.cats);

  const getRandomNumbers = (arrLength: number): number[] => {
    let arr = [];
    while (arr.length < arrLength) {
      const r: number = Math.floor(Math.random() * cats.length);
      if (arr.indexOf(r) === -1) {
        try {
          cats[r].image.url !== undefined && arr.push(r);
        } catch (error) {}
      }
    }
    return arr;
  };

  return { cats, getRandomNumbers };
};

export default useRandomCats;
