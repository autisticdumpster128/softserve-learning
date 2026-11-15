// ===== Завдання 1: Сортування бульбашкою (Bubble Sort) =====
function bubbleSort(arr) {
  const a = [...arr]; 

  for (let i = 0; i < a.length - 1; i++) {
    let swapped = false; 

  
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        swapped = true;
      }
    }

    
    if (!swapped) break;
  }

  return a;
}

// ===== Завдання 2: Сортування вибором (Selection Sort) =====
function selectionSort(arr) {
  const a = [...arr];

  for (let i = 0; i < a.length - 1; i++) {
    let minIndex = i; 

    for (let j = i + 1; j < a.length; j++) {
      if (a[j] < a[minIndex]) {
        minIndex = j; 
      }
    }

   
    if (minIndex !== i) {
      const temp = a[i];
      a[i] = a[minIndex];
      a[minIndex] = temp;
    }
  }

  return a;
}

// ===== Завдання 3: Сортування вставками (Insertion Sort) =====
function insertionSort(arr) {
  const a = [...arr];


  for (let i = 1; i < a.length; i++) {
    const current = a[i];
    let j = i - 1;


    while (j >= 0 && a[j] > current) {
      a[j + 1] = a[j];
      j--;
    }

   
    a[j + 1] = current;
  }

  return a;
}

// ===== Перевірка =====
const numbers = [64, 34, 25, 12, 22, 11, 90, 5];

console.log('Вихідний масив:', numbers);
console.log('Bubble Sort:   ', bubbleSort(numbers));
console.log('Selection Sort:', selectionSort(numbers));
console.log('Insertion Sort:', insertionSort(numbers));
