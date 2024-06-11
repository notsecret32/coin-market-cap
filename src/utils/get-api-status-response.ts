export const getApiStatusResponse = (response: any) => ({
  timestamp: response.status.timestamp,
  errorCode: response.status.error_code,
  errorMessage: response.status.error_message,
  elapsed: response.status.elapsed,
  creditCount: response.status.credit_count,
  notice: response.status.notice || '',
})
