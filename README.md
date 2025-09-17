# Scribd-Embeds-Image-Downloader
Download images from **Scribd** embeds from the **browser**. If entire pages are images, then entire pages will be downloaded.

*Note*: Works only if browser supports **File System API**

# Instruction
1. Open embeds of the book/article that you're interested in \
To open embeds, the next URL is used `https://www.scribd.com/embeds/<document ID>/content` \
Example: \
If url is `https://www.scribd.com/document/874583866/a-b-c`, where '874583866' is the document ID, \
Then, to open embeds, go to `https://www.scribd.com/embeds/874583866/content`
3. Open DevTools (F12) and choose 'Console' tab at the top
4. Scroll the embeds page from top to bottom to preload all images (elements)
5. Copy the script from the `downloader.js` file and paste into the console, press Enter, and pick the folder for downloaded images
6. Wait for the download
7. Done
