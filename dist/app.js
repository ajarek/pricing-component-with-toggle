var spansId = document.querySelectorAll('main span');
var checkBox = document.querySelector('#box');
var prices = {
    basic: [{ monthly: 19.99 }, { annualy: 199.99 }],
    prof: [{ monthly: 24.99 }, { annualy: 249.99 }],
    master: [{ monthly: 39.99 }, { annualy: 399.99 }]
};
checkBox.addEventListener('change', function () {
    if (checkBox.checked) {
        spansId.forEach(function (span) {
            if (span.id === 'id-basic') {
                span.innerText = "".concat(prices.basic[1].annualy);
            }
            if (span.id === 'id-prof') {
                span.innerText = "".concat(prices.prof[1].annualy);
            }
            if (span.id === 'id-master') {
                span.innerText = "".concat(prices.master[1].annualy);
            }
        });
    }
    else {
        spansId.forEach(function (span) {
            if (span.id === 'id-basic') {
                span.innerText = "".concat(prices.basic[0].monthly);
            }
            if (span.id === 'id-prof') {
                span.innerText = "".concat(prices.prof[0].monthly);
            }
            if (span.id === 'id-master') {
                span.innerText = "".concat(prices.master[0].monthly);
            }
        });
    }
});
