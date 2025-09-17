(async () => {
  // Prompt the user to choose a directory
  const dirHandle = await window.showDirectoryPicker();
  
  // Step 1: Select all images within page containers
  const images = [...document.querySelectorAll('div[id^="page"] img')];
  console.log(`Found ${images.length} images`);
  
  // Step 2: Extract all URLs first before processing
  const imageUrls = images.map(img => {
    let url = img.getAttribute("src") || img.getAttribute("orig");
    if (!url) return null;
    
    // If the URL is from 'scribd.com', replace 'scribd' with 'scribdassets'
    if (url.includes("scribd.com")) {
      url = url.replace("scribd.com", "scribdassets.com");
    }
    
    // Ensure the URL uses HTTPS
    if (url.startsWith("http://")) {
      url = url.replace("http://", "https://");
    }
    
    return url;
  }).filter(url => url !== null); // Remove null values
  
  console.log(`Extracted ${imageUrls.length} valid URLs`);
  
  // Process the URLs array for downloading
  let i = 1;
  for (const url of imageUrls) {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const fileHandle = await dirHandle.getFileHandle(`page-${i}.jpg`, { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(blob);
      await writable.close();
      console.log(`✅ Saved: page-${i}.jpg (${url})`);
      i++;
    } catch (err) {
      console.error(`❌ Failed for ${url}`, err);
    }
  }
  console.log("🎉 Done!");
})();
