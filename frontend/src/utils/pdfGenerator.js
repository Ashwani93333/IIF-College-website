import html2pdf from 'html2pdf.js';

/**
 * Client-side HTML-to-PDF utility for IIFCCMS application forms.
 * Follows design doc section 7.7:
 * - Waits for document.fonts.ready so site fonts are loaded.
 * - Formats to A4 portrait with ~8-10mm margins.
 * - Uses high quality 2x canvas scaling with CORS enabled.
 */
export async function downloadPdf(element, filename = 'IIF_Application_Form.pdf') {
  if (!element) {
    throw new Error('Target element to generate PDF is not provided.');
  }

  // Ensure site fonts are loaded prior to capture
  if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch (e) {
      console.warn('Font readiness check skipped or timed out:', e);
    }
  }

  const opt = {
    margin: [8, 8, 8, 8], // mm margins
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      scrollY: 0,
      windowWidth: 1024
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['css', 'legacy'],
      before: '.print-page-break'
    }
  };

  return html2pdf().set(opt).from(element).save();
}

/**
 * Generates an isolated PDF Blob for callbacks (e.g. onFinalSubmit).
 */
export async function generatePdfBlob(element, filename = 'IIF_Application_Form.pdf') {
  if (!element) return null;

  if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch (e) {
      console.warn('Font readiness check skipped or timed out:', e);
    }
  }

  const opt = {
    margin: [8, 8, 8, 8],
    filename,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      scrollY: 0,
      windowWidth: 1024
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['css', 'legacy'],
      before: '.print-page-break'
    }
  };

  try {
    const worker = html2pdf().set(opt).from(element);
    const pdfBlob = await worker.outputPdf('blob');
    return pdfBlob;
  } catch (err) {
    console.warn('Failed to extract PDF Blob directly, returning null:', err);
    return null;
  }
}
