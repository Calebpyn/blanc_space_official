import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Upload a file to a Supabase bucket and get the public URL.
 * @param {File} file - The file to upload
 * @param {string} bucket - The name of the Supabase bucket
 * @param {string} filePath - The file path to store in the bucket (e.g., 'folder-name/file-name')
 * @returns {Promise<{ error: Error | null, publicUrl: string | null }>} - The result of the upload and the file's public URL
 */
export async function uploadFileToSupabase(
  file: File,
  bucket: string,
  filePath: string
) {
  try {
    // Upload the file to the bucket
    const { error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (error) {
      console.error("Error uploading file:", error.message);
      return { error, publicUrl: null };
    }
    // Get the public URL of the uploaded file
    try {
      const { data } = supabase.storage.from(bucket).getPublicUrl(filePath);
      const publicURL = data?.publicUrl; // Access publicUrl from data

      console.log("File uploaded successfully:", data);
      console.log("Public URL:", publicURL);
      return { error: null, publicUrl: publicURL };
    } catch (error) {
      console.error("Error getting public URL:", error);
      return { error: error, publicUrl: null };
    }
  } catch (err) {
    console.error("Upload failed:", err);
    return { error: err as Error, publicUrl: null };
  }
}
