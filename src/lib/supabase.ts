import { ENV } from "@/constant";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(ENV.SUPABASE_URL, ENV.SUPABASE_KEY);

export default supabase;
