document.addEventListener('DOMContentLoaded', function() {
    const qoraajHasanaBtn = document.getElementById('qaarjHasanaBtn');
    const zakatBtn = document.getElementById('zakatBtn');
    const zakatProviderBtn = document.getElementById('zakatProviderBtn');
    const zakatReceiverBtn = document.getElementById('zakatReceiverBtn');
    const mosqueName = document.getElementById('mosqueName');

    const qoraajHasanaForm = document.getElementById('qaarjHasanaForm');
    const zakatSection = document.getElementById('zakatSection');
    const zakatProviderForm = document.getElementById('zakatProviderForm');
    const zakatReceiverForm = document.getElementById('zakatReceiverForm');

    qoraajHasanaBtn.addEventListener('click', function() {
        qoraajHasanaForm.style.display = 'block';
        zakatSection.style.display = 'none';
    });

    zakatBtn.addEventListener('click', function() {
        zakatSection.style.display = 'block';
        qoraajHasanaForm.style.display = 'none';
    });

    zakatProviderBtn.addEventListener('click', function() {
        zakatProviderForm.style.display = 'block';
        zakatReceiverForm.style.display = 'none';
    });

    zakatReceiverBtn.addEventListener('click', function() {
        zakatReceiverForm.style.display = 'block';
        zakatProviderForm.style.display = 'none';
    });
});
