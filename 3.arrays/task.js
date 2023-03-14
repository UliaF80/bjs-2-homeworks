"use stict";

function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((item, index) => item === arr2[index])
  );
}
compareArrays([1, 2, 3] === [1, 2, 3]);
compareArrays([1, 2], [1, 2, 3]);
compareArrays([1, 2, 3] === [3, 2, 1]);
compareArrays([0, 1, 2] === [0, 1]);
compareArrays([0, 1] === [0, 1, 2]);
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]);

function getUsersNamesInAgeRange(users, gender) {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.age)
    .reduce((acc, item, index, array) => acc + item / array.length, 0);
}
