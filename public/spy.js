let key;

function encryptMessage() {
  const message = document.getElementById("message").value;
  key = CryptoJS.lib.WordArray.random(32);
  const iv = CryptoJS.lib.WordArray.random(12);
  const encrypted = CryptoJS.AES.encrypt(message, key, { iv: iv });
  const encryptedHex = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Hex);
  document.getElementById("encrypted").value = encryptedHex;
}

function decryptMessage() {
  const encryptedHex = document.getElementById("encrypted").value;
  if (!key) {
    alert("Key is missing. Please encrypt a message first.");
    return;
  }
  const encryptedBytes = CryptoJS.enc.Hex.parse(encryptedHex);
  const iv = encryptedBytes.slice(0, 16);
  const ciphertext = encryptedBytes.slice(16);
  const decrypted = CryptoJS.AES.decrypt(
    { ciphertext: ciphertext },
    key,
    { iv: iv }
  );
  const decryptedMessage = decrypted.toString(CryptoJS.enc.Utf8);
  document.getElementById("decrypted").value = decryptedMessage;
}
