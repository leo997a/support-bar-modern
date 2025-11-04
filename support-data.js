// بيانات الداعمين - يمكن تحديثها من صفحة الإدارة
let supportersData = [
    {
        id: 1,
        name: "أحمد محمد",
        amount: 20,
        message: "شكرًا لك على المحتوى الرائع!",
        avatar: "أ"
    },
    {
        id: 2,
        name: "سارة عبدالله",
        amount: 15,
        message: "واصل العمل الرائع",
        avatar: "س"
    },
    {
        id: 3,
        name: "محمد علي",
        amount: 30,
        message: "هذا البث يستحق كل الدعم",
        avatar: "م"
    }
];

// دالة لجلب الداعمين
function getSupporters() {
    return [...supportersData]; // إرجاع نسخة لمنع التعديل المباشر
}

// دالة لإضافة داعم جديد
function addSupporter(name, amount, message) {
    const newSupporter = {
        id: Date.now(), // استخدام الطابع الزمني كمعرف فريد
        name: name,
        amount: parseFloat(amount),
        message: message,
        avatar: name.charAt(0)
    };
    
    supportersData.unshift(newSupporter); // إضافة الداعم الجديد في البداية
    
    // الحفاظ على آخر 20 داعم فقط
    if (supportersData.length > 20) {
        supportersData = supportersData.slice(0, 20);
    }
    
    return newSupporter;
}

// دالة لتحديث شريط الداعمين
function updateSupportBar() {
    const container = document.getElementById('supportersContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    supportersData.forEach(supporter => {
        const supporterElement = document.createElement('div');
        supporterElement.className = 'supporter';
        supporterElement.innerHTML = `
            <div class="supporter-avatar">${supporter.avatar}</div>
            <div class="supporter-info">
                <div class="supporter-name">${supporter.name}</div>
                <div class="support-message">${supporter.message || ''}</div>
            </div>
            <div class="support-amount">$${supporter.amount}</div>
        `;
        container.appendChild(supporterElement);
    });
}

// مشاركة الوظائف مع النطاق العام
window.supportersApp = {
    getSupporters,
    addSupporter,
    updateSupportBar
};