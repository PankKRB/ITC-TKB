<?php
/**
 * Script PHP để gửi Push Notification qua Expo Push Service
 * 
 * Cách sử dụng:
 * 1. Lấy Expo Push Token từ app (console log)
 * 2. Thay EXPO_PUSH_TOKEN bằng token thật
 * 3. Chạy: php send_push_expo.php
 */

// ============================================
// CẤU HÌNH
// ============================================

// Expo Push Token (lấy từ console log trong app)
// Dạng: ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]
$expoPushToken = 'ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]';

// ============================================
// DỮ LIỆU NOTIFICATION
// ============================================

$notification = [
    'to' => $expoPushToken,
    'sound' => 'default',
    'title' => 'Thông báo mới',
    'body' => 'Bạn có 1 tin nhắn mới từ ITC TKB',
    'data' => [
        'id' => '12345',
        'type' => 'message',
        'timestamp' => time()
    ],
    'badge' => 1,
    'priority' => 'high',
];

// ============================================
// GỬI NOTIFICATION
// ============================================

function sendExpoNotification($notification) {
    $url = 'https://exp.host/--/api/v2/push/send';
    
    $headers = [
        'Accept: application/json',
        'Accept-Encoding: gzip, deflate',
        'Content-Type: application/json',
    ];
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($notification));
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    
    return [
        'success' => $httpCode == 200,
        'httpCode' => $httpCode,
        'response' => json_decode($response, true),
        'error' => $error
    ];
}

// Gửi notification
echo "📤 Đang gửi push notification qua Expo...\n\n";

$result = sendExpoNotification($notification);

if ($result['success']) {
    echo "✅ Gửi notification thành công!\n";
    echo "📊 Response:\n";
    print_r($result['response']);
} else {
    echo "❌ Lỗi gửi notification!\n";
    echo "HTTP Code: " . $result['httpCode'] . "\n";
    echo "Error: " . $result['error'] . "\n";
    echo "Response:\n";
    print_r($result['response']);
}

echo "\n";
