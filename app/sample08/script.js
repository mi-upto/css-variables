const rootStyles = getComputedStyle(document.documentElement);

// カスタムプロパティの値を取得
const value = rootStyles.getPropertyValue('--color').trim();
console.log(value); // red
