function findJudge(n: number, trust: number[][]): number {
  if (n === 1) return 1;
  const people = new Set(); //values are person's index
  let trustedPeope = new Int32Array(n + 1); // index is person's number and value is how many people trust this person

  const ppl = new Set(
    trust.map(([a, b]) => {
      trustedPeope[b] += 1;
      return a;
    })
  );

  //   for (const [person, trusted] of trust) {
  //     people.add(person);
  //     trustedPeope[trusted] += 1;
  //   }
  const judge = trustedPeope.indexOf(n - 1);

  return people.has(judge) ? -1 : judge; // if judge is in people he trusts someone, thus he is not the real judge so there is no judge
}

console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
