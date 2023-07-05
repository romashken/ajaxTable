export default function getTable() {
  return new Promise((resolve, reject) => {
    const xml = new XMLHttpRequest();
    xml.open(
      "GET",
      "https://admin.estetdveri.ru/ajax/get_cities.php?action=getcities"
    );
    xml.onload = () => {
      if (xml.status >= 400) {
        reject(xml.response);
      } else {
        resolve(JSON.parse(xml.response));
      }
    };
    xml.onerror = () => {
      reject(xml.response);
    };
    xml.send();
  });
}
