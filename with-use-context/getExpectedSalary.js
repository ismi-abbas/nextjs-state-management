const getSalary = () => {
  let bonus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < bonus.length; i++) {
    const bonusMultiplier = bonus[i];

    console.log(
      `bonus month: ${bonusMultiplier}`,
      (((3500 * 12) + (3500 * bonusMultiplier) + 350) / 12).toFixed(0) 
    );
  }
};

getSalary();
