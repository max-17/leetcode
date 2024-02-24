// function findAllPeople(
//   n: number,
//   meetings: number[][],
//   firstPerson: number
// ): number[] {
//   const timestemps = new Array(n).fill(Number.MAX_VALUE);
//   timestemps[0] = timestemps[firstPerson] = 0;

//   let knowsSecret = new Set([0, firstPerson]);

//   // time : [person1, person2][]
//   const timeGraph: Map<number, Set<number>[]> = new Map();
//   //               person : [p2,    time]  []
//   const graph: Map<number, [number, number][]> = new Map();

//   // Constructing the graph
//   outer: for (const [x, y, time] of meetings) {
//     if (!graph.has(x)) {
//     }
//     if (!timeGraph.has(time)) {
//       timeGraph.set(time, [new Set([x, y])]);
//       continue;
//     }
//     for (const meetingRoom of timeGraph.get(time) || []) {
//       if (meetingRoom.has(x) || meetingRoom.has(y)) {
//         meetingRoom.add(x);
//         meetingRoom.add(y);
//         continue outer;
//       }
//     }
//     timeGraph.get(time)?.push(new Set([x, y]));
//   }

//   const queue = [...timeGraph.keys()].sort((a, b) => a - b);

//   for (const time of queue) {
//     const meetingsAtTime = timeGraph.get(time) || [];

//     for (const room of meetingsAtTime) {
//       if ([...room].some((person) => knowsSecret.has(person))) {
//         knowsSecret = new Set([...room, ...knowsSecret]);
//       }
//     }
//   }

//   return [...knowsSecret];
// }

function findAllPeople(
  n: number,
  meetings: number[][],
  firstPerson: number
): number[] {
  const timestemps = new Array(n).fill(Number.MAX_VALUE);
  timestemps[0] = timestemps[firstPerson] = 0;

  let knowsSecret = new Set([0, firstPerson]);

  const graph: Map<number, [number, number][]> = new Map();

  // Constructing the graph

  for (const [x, y, time] of meetings) {
    if (!graph.has(x)) {
      graph.set(x, []);
    }
    if (!graph.has(y)) {
      graph.set(y, []);
    }
    graph.get(x)!.push([y, time]);
    graph.get(y)!.push([x, time]);
  }

  function shareSecret(person: number, time: number) {
    for (const [p, t] of graph.get(person) || []) {
      if (t >= time) {
        if (
          !knowsSecret.has(p) ||
          (timestemps[p] !== Number.MAX_VALUE && t < timestemps[p])
        ) {
          knowsSecret.add(p);
          timestemps[p] = Math.min(timestemps[p], t);
          shareSecret(p, t);
        }
      }
    }
  }
  shareSecret(0, 0);
  shareSecret(firstPerson, 0);

  return [...knowsSecret].sort((a, b) => a - b);
}

console.log(
  findAllPeople(
    6,
    [
      [0, 1, 8],
      [0, 5, 5],
      [0, 5, 4],
      [1, 4, 5],
      [0, 3, 15],
      [1, 0, 10],
      [0, 2, 14],
      [2, 1, 18],
      [0, 5, 3],
      [3, 2, 1],
      [4, 5, 14],
      [5, 3, 13],
      [2, 4, 5],
      [2, 1, 14],
      [1, 3, 3],
      [1, 5, 17],
      [2, 4, 17],
    ],
    3
  )
);
