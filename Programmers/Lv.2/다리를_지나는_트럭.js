function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const bridge = Array(bridge_length).fill(0);
  let currentWeight = 0;

  while (truck_weights.length > 0 || currentWeight > 0) {
    time++;
    // console.log(bridge)
    currentWeight -= bridge.shift();

    if (truck_weights.length > 0) {
      if (currentWeight + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        bridge.push(truck);
        currentWeight += truck;
      } else {
        bridge.push(0);
      }
    } else {
      bridge.push(0);
    }
  }

  return time;
}
