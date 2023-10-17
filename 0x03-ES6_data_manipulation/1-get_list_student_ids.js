/* eslint-disable linebreak-style */
export default function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr
      .filter((item) => item && 'id' in item)
      .map((item) => item.id);
  }
  return [];
}
