// Admin Panel JavaScript

// Toggle Sidebar on Mobile
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Notifications Dropdown
    const notifications = document.querySelector('.notifications');
    if (notifications) {
        notifications.addEventListener('click', () => {
            // Add notification dropdown functionality
            console.log('Notifications clicked');
        });
    }

    // User Menu Dropdown
    const userMenu = document.querySelector('.user-menu');
    if (userMenu) {
        userMenu.addEventListener('click', () => {
            // Add user menu dropdown functionality
            console.log('User menu clicked');
        });
    }

    // Search Functionality
    const searchInput = document.querySelector('.header-search input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            // Add search functionality
            console.log('Searching for:', e.target.value);
        });
    }

    // Load Recent Activity
    loadRecentActivity();
});

// Function to load recent activity
function loadRecentActivity() {
    const activityList = document.querySelector('.activity-list');
    if (!activityList) return;

    // Sample activity data (replace with actual data from backend)
    const activities = [
        {
            type: 'consultation',
            message: 'طلب استشارة جديد من أحمد محمد',
            time: 'منذ 5 دقائق'
        },
        {
            type: 'design',
            message: 'تم إضافة تصميم مطبخ جديد',
            time: 'منذ 15 دقيقة'
        },
        {
            type: 'message',
            message: 'رسالة جديدة من فرع صلالة',
            time: 'منذ 30 دقيقة'
        }
    ];

    // Clear existing activities
    activityList.innerHTML = '';

    // Add activities to the list
    activities.forEach(activity => {
        const activityItem = document.createElement('div');
        activityItem.className = `activity-item ${activity.type}`;
        activityItem.innerHTML = `
            <div class="activity-icon">
                <i class="fas ${getActivityIcon(activity.type)}"></i>
            </div>
            <div class="activity-content">
                <p>${activity.message}</p>
                <span>${activity.time}</span>
            </div>
        `;
        activityList.appendChild(activityItem);
    });
}

// Helper function to get activity icon
function getActivityIcon(type) {
    switch (type) {
        case 'consultation':
            return 'fa-comments';
        case 'design':
            return 'fa-pencil-ruler';
        case 'message':
            return 'fa-envelope';
        default:
            return 'fa-info-circle';
    }
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Delete Modal Functionality
const deleteModal = document.getElementById('deleteModal');
const deleteButtons = document.querySelectorAll('.action-btn.text-danger');
const closeModalBtn = document.querySelector('.close-modal');
const cancelDeleteBtn = document.querySelector('.cancel-delete');
const confirmDeleteBtn = document.querySelector('.confirm-delete');
const clientNameSpan = document.querySelector('.client-name');

// Open modal when delete button is clicked
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        const clientRow = button.closest('tr');
        const clientName = clientRow.querySelector('h4').textContent;
        clientNameSpan.textContent = clientName;
        deleteModal.classList.add('active');
    });
});

// Close modal functions
function closeModal() {
    deleteModal.classList.remove('active');
}

closeModalBtn.addEventListener('click', closeModal);
cancelDeleteBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
deleteModal.addEventListener('click', (e) => {
    if (e.target === deleteModal) {
        closeModal();
    }
});

// Handle delete confirmation
confirmDeleteBtn.addEventListener('click', () => {
    // Here you would typically make an API call to delete the client
    closeModal();
    // Show success message or handle the deletion
}); 