import { createSelector } from "@reduxjs/toolkit";
import { filtersValue } from "./consts";

export const selectTasksIsLoading = (state) => state.tasks.isLoading;
export const selectTasksError = (state) => state.tasks.error;
export const selectTasksItems = (state) => state.tasks.items;
export const selectFilter = (state) => state.filter;

// export const selectTasksCount = (state) => {
//   console.log("======= selectTasksCount =====");
//   const items = selectTasksItems(state);
//   return items.reduce(
//     (count, task) => {
//       if (task.completed) {
//         count.completed = count.completed + 1;
//       } else {
//         count.active += 1;
//       }
//       return count;
//     },
//     { completed: 0, active: 0 }
//   );
// };

export const selectTasksCount = createSelector([selectTasksItems], (items) => {
  console.log("======= selectTasksCount ======");
  return items.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed = count.completed + 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { completed: 0, active: 0 }
  );
});

// export const selectVisibleTasks = (state) => {
//   const items = selectTasksItems(state);
//   const filter = selectFilter(state);

//   switch (filter) {
//     case filtersValue.completed:
//       return items.filter((item) => item.completed);
//     case filtersValue.active:
//       return items.filter((item) => !item.completed);
//     default:
//       return items;
//   }
// };

export const selectVisibleTasks = createSelector(
  [selectTasksItems, selectFilter],
  (items, filter) => {
    switch (filter) {
      case filtersValue.completed:
        return items.filter((item) => item.completed);
      case filtersValue.active:
        return items.filter((item) => !item.completed);
      default:
        return items;
    }
  }
);
