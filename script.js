// ===== Image to PDF =====
function convertImageToPDF() {
  const fileInput = document.getElementById('imageInput');
  const previewArea = document.getElementById('previewArea');
  
  if (!fileInput.files[0]) {
    alert("Please select an image first!");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    previewArea.innerHTML = `<img src="${e.target.result}" id="previewImage">`;
    
    const element = previewArea;
    const opt = {
      margin: 10,
      filename: 'converted.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
  };
  reader.readAsDataURL(fileInput.files[0]);
}

// ===== PDF to Word (Simulated) =====
function simulatePdfToWord() {
  const fileInput = document.getElementById('pdfInput');
  if (!fileInput.files[0]) {
    alert("Please select a PDF first!");
    return;
  }
  const blob = new Blob(["Simulated Word File"], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "converted.docx";
  a.click();
}

// ===== Word to PDF (Simulated) =====
function simulateWordToPDF() {
  const fileInput = document.getElementById('wordInput');
  if (!fileInput.files[0]) {
    alert("Please select a Word file first!");
    return;
  }
  const blob = new Blob(["Simulated PDF File"], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "converted.pdf";
  a.click();
}

// ===== Image to Excel (CSV) =====
function convertImageToExcel() {
  const fileInput = document.getElementById('imageExcelInput');
  if (!fileInput.files[0]) {
    alert("Please select an image first!");
    return;
  }
  const csvData = "Name,Value\nImage1,100\nImage2,200";
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "data.csv";
  a.click();
    }
