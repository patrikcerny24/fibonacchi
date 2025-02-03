function generateFibonacci(n) {
    let fibonacci = document.getElementById('fibonacci');
    let a = 1, b = 1, temp;
    let i = 0;
    while (i <= n) {
     const mesic = document.createElement('div');
     mesic.classList.add('rabbit');
     let stars = '';
     let j =0;
     while (j<a) {
        stars += '*';
        j++;
     }
     mesic.innerHTML = stars;
     fibonacci.appendChild(mesic);
     temp = a+b;
     a=b;
     b=temp;
     i++;
    }
}

const n = 10;
generateFibonacci(n);