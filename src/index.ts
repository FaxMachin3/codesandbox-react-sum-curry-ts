import "./styles.css";

function getCurrySum() {
  let shouldAdd = true;

  const alternateSum = (arr1: any[], arr2: any[] = []) => {
    if (arr1.length === 0) {
      return 0;
    }

    let sum = arr1[0];

    for (let i = 1; i < arr1.length; i++) {
      if (shouldAdd) {
        sum += arr1[i];
        shouldAdd = false;
      } else {
        sum -= arr1[i];
        shouldAdd = true;
      }
    }

    for (let i = 0; i < arr2.length; i++) {
      if (shouldAdd) {
        sum += arr2[i];
        shouldAdd = false;
      } else {
        sum -= arr2[i];
        shouldAdd = true;
      }
    }

    return sum;
  };

  const currySum = (...args1: any) => {
    return (...args2: any) => {
      if (args2.length > 0) {
        return currySum(alternateSum(args1, args2));
      } else {
        shouldAdd = true;
        return alternateSum(args1);
      }
    };
  };

  return currySum;
}

const currySum = getCurrySum();
console.log(currySum(1, 2)(3, 4, 5)(6, 7)(8, 9)(10)());
console.log(currySum(1, 2)(3, 4, 5)(6, 7)(8, 9)());
console.log(currySum(1, 2)());
