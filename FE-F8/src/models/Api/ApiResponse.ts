export interface ApiResponse<T> {
  data?: T;
  current_page: number;
  count_page: number;
}

export interface BaseResponseDto<T> {
  data?: T;
  message: string;
  status: number;
  success: boolean;
}
