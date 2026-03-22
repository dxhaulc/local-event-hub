import { supabase } from '../config/supabaseClient';

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*');

  if (error) {
    console.error('Lỗi khi lấy danh mục:', error);
    return [];
  }
  return data;
};