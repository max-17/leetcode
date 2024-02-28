/**
 
# Approach
Aproach is the same as Hint 1 and Hint 2. 
recursion is used in order to get the best timing result

we have the like-time coefficient `likeTime` and its corresponding element sum `satisfacionSum` (sum of satiscation we wanna use).

##### Important!!!
>sort the satiscation in descending order (from high to low).
As we can prepare dishes in any order we want to start from highest saisfaction

If adding the current element `satisfaction[i]` to `satisfactionSum` would be greater than 0, we add the sum to `likeTime` and pass them to recursion. Otherwise stop and return `likeTime`
*/

export function maxSatisfaction(satisfaction: number[]): number {
  satisfaction.sort((a, b) => b - a);
  function recursive(i = 0, currentSum = 0): number {
    if (i >= satisfaction.length || currentSum + satisfaction[i] < 0) {
      return currentSum;
    }
    return currentSum + recursive(i + 1, currentSum + satisfaction[i]);
  }

  return recursive();
}

console.log(maxSatisfaction([-1, -8, 0, 5, -7]));
