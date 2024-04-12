
export function inpuMaxLength(input) {
  const maxLength = 3

  if(input.value.length > maxLength) {
    input.value = input.value.slice(0, maxLength)  }
}