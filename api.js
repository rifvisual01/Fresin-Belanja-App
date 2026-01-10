<script>
/**
 * ===============================
 * KONFIGURASI API GAS
 * ===============================
 */
const API_BASE = "https://script.google.com/macros/s/AKfycbweNV91OeEw3giUtMpCAoqSnTkLPdGBDhK1D6lSFPkjvbZvcNqT08U8oElaa6SLsC9c/exec";

/**
 * ===============================
 * HELPER FETCH (INTI)
 * ===============================
 */
function postToGAS(formData) {
  return fetch(API_BASE, {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .catch(err => {
    console.error("Fetch error:", err);
    throw err;
  });
}

/**
 * ===============================
 * API WRAPPER (1:1 GOOGLE.SCRIPT.RUN)
 * ===============================
 */

function apiCreateTransaksi(data) {
  const fd = new FormData();
  fd.append("action", "createTransaksi");

  Object.keys(data).forEach(key => {
    if (data[key] !== undefined && data[key] !== null) {
      fd.append(key, data[key]);
    }
  });

  return postToGAS(fd);
}

function apiUpdateTransaksi(idTransaksi, data) {
  const fd = new FormData();
  fd.append("action", "updateTransaksi");
  fd.append("idTransaksi", idTransaksi);

  Object.keys(data).forEach(key => {
    if (data[key] !== undefined && data[key] !== null) {
      fd.append(key, data[key]);
    }
  });

  return postToGAS(fd);
}

function apiGetAllTransaksi() {
  const fd = new FormData();
  fd.append("action", "getAllTransaksi");
  return postToGAS(fd);
}

function apiDeleteTransaksi(idTransaksi) {
  const fd = new FormData();
  fd.append("action", "deleteTransaksi");
  fd.append("idTransaksi", idTransaksi);
  return postToGAS(fd);
}

function apiCheckPin(pin) {
  const fd = new FormData();
  fd.append("action", "checkPin");
  fd.append("pin", pin);
  return postToGAS(fd);
}
</script>
