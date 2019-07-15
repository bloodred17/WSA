var total;
do {
    total = prompt("Enter the total number of characters to be printed. (Odd)");
} while ((total % 2 === 0) || total === "" || total === null || isNaN(total));
total = parseInt(total);

var mid;
do {
    mid = prompt("Enter the number of characters to be printed in the middle. (Odd)");
} while ((mid % 2 === 0) || mid === "" || mid === null || isNaN(mid));
mid = parseInt(mid);

var pattern1;
do {
    pattern1 = prompt("Enter pattern 1:");
} while (pattern1 === null || pattern1 === "" || !isNaN(pattern1));

var pattern2;
do {
    pattern2 = prompt("Enter pattern 1:");
} while (pattern2 === null || pattern2 === "" || !isNaN(pattern2));

for (var i = 1; i <= total; i++) {
    if ((i > (total - mid) / 2) && i <= ((total - mid) / 2) + mid) {
        document.write(pattern2);
    } else {
        document.write(pattern1);
    }
}