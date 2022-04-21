$(function() {

    // vacancies choice

    $('.vacansies__border').hide();
    $('#vac_all>.vacansies__border').show();

    let vac_all = document.getElementById('vac_all');
    let vac_test = document.getElementById('vac_test');
    let vac_dev = document.getElementById('vac_dev');
    let vac_office = document.getElementById('vac_office');
    let vac_analytics = document.getElementById('vac_analytics');
    let vac_other = document.getElementById('vac_other');

    let dev_senior = document.getElementById('dev_senior');
    let dev_middle = document.getElementById('dev_middle');
    let analytic_middle = document.getElementById('analytic_middle');
    let test_middle = document.getElementById('test_middle');
    let test_junior = document.getElementById('test_junior');
    let support = document.getElementById('support');
    let admin = document.getElementById('sys-admin');
    let pm = document.getElementById('pm');

    vac_all.onclick = function() {
        $('#vac_all>.vacansies__border').show();
        $('#vac_test>.vacansies__border').hide();
        $('#vac_dev>.vacansies__border').hide();
        $('#vac_office>.vacansies__border').hide();
        $('#vac_analytics>.vacansies__border').hide();
        $('#vac_other>.vacansies__border').hide();

        vac_all.classList.add('vacancies__side-item_active');
        vac_test.classList.remove('vacancies__side-item_active');
        vac_dev.classList.remove('vacancies__side-item_active');
        vac_office.classList.remove('vacancies__side-item_active');
        vac_analytics.classList.remove('vacancies__side-item_active');
        vac_other.classList.remove('vacancies__side-item_active');

        dev_senior.classList.remove('hidden');
        dev_middle.classList.remove('hidden');
        analytic_middle.classList.remove('hidden');
        test_middle.classList.remove('hidden');
        test_junior.classList.remove('hidden');
        support.classList.remove('hidden');
        admin.classList.remove('hidden');
        pm.classList.remove('hidden');
    }

    vac_test.onclick = function() {
        $('#vac_all>.vacansies__border').hide();
        $('#vac_test>.vacansies__border').show();
        $('#vac_dev>.vacansies__border').hide();
        $('#vac_office>.vacansies__border').hide();
        $('#vac_analytics>.vacansies__border').hide();
        $('#vac_other>.vacansies__border').hide();

        vac_all.classList.remove('vacancies__side-item_active');
        vac_test.classList.add('vacancies__side-item_active');
        vac_dev.classList.remove('vacancies__side-item_active');
        vac_office.classList.remove('vacancies__side-item_active');
        vac_analytics.classList.remove('vacancies__side-item_active');
        vac_other.classList.remove('vacancies__side-item_active');

        dev_senior.classList.add('hidden');
        dev_middle.classList.add('hidden');
        analytic_middle.classList.add('hidden');
        test_middle.classList.remove('hidden');
        test_junior.classList.remove('hidden');
        support.classList.add('hidden');
        admin.classList.add('hidden');
        pm.classList.add('hidden');
    }

    vac_dev.onclick = function() {
        $('#vac_all>.vacansies__border').hide();
        $('#vac_test>.vacansies__border').hide();
        $('#vac_dev>.vacansies__border').show();
        $('#vac_office>.vacansies__border').hide();
        $('#vac_analytics>.vacansies__border').hide();
        $('#vac_other>.vacansies__border').hide();

        vac_all.classList.remove('vacancies__side-item_active');
        vac_test.classList.remove('vacancies__side-item_active');
        vac_dev.classList.add('vacancies__side-item_active');
        vac_office.classList.remove('vacancies__side-item_active');
        vac_analytics.classList.remove('vacancies__side-item_active');
        vac_other.classList.remove('vacancies__side-item_active');

        dev_senior.classList.remove('hidden');
        dev_middle.classList.remove('hidden');
        analytic_middle.classList.add('hidden');
        test_middle.classList.add('hidden');
        test_junior.classList.add('hidden');
        support.classList.add('hidden');
        admin.classList.add('hidden');
        pm.classList.add('hidden');
    }

    vac_office.onclick = function() {
        $('#vac_all>.vacansies__border').hide();
        $('#vac_test>.vacansies__border').hide();
        $('#vac_dev>.vacansies__border').hide();
        $('#vac_office>.vacansies__border').show();
        $('#vac_analytics>.vacansies__border').hide();
        $('#vac_other>.vacansies__border').hide();

        vac_all.classList.remove('vacancies__side-item_active');
        vac_test.classList.remove('vacancies__side-item_active');
        vac_dev.classList.remove('vacancies__side-item_active');
        vac_office.classList.add('vacancies__side-item_active');
        vac_analytics.classList.remove('vacancies__side-item_active');
        vac_other.classList.remove('vacancies__side-item_active');

        dev_senior.classList.add('hidden');
        dev_middle.classList.add('hidden');
        analytic_middle.classList.add('hidden');
        test_middle.classList.add('hidden');
        test_junior.classList.add('hidden');
        support.classList.add('hidden');
        admin.classList.add('hidden');
        pm.classList.remove('hidden');
    }

    vac_analytics.onclick = function() {
        $('#vac_all>.vacansies__border').hide();
        $('#vac_test>.vacansies__border').hide();
        $('#vac_dev>.vacansies__border').hide();
        $('#vac_office>.vacansies__border').hide();
        $('#vac_analytics>.vacansies__border').show();
        $('#vac_other>.vacansies__border').hide();

        vac_all.classList.remove('vacancies__side-item_active');
        vac_test.classList.remove('vacancies__side-item_active');
        vac_dev.classList.remove('vacancies__side-item_active');
        vac_office.classList.remove('vacancies__side-item_active');
        vac_analytics.classList.add('vacancies__side-item_active');
        vac_other.classList.remove('vacancies__side-item_active');

        dev_senior.classList.add('hidden');
        dev_middle.classList.add('hidden');
        analytic_middle.classList.remove('hidden');
        test_middle.classList.add('hidden');
        test_junior.classList.add('hidden');
        support.classList.add('hidden');
        admin.classList.add('hidden');
        pm.classList.add('hidden');
    }

    vac_other.onclick = function() {
        $('#vac_all>.vacansies__border').hide();
        $('#vac_test>.vacansies__border').hide();
        $('#vac_dev>.vacansies__border').hide();
        $('#vac_office>.vacansies__border').hide();
        $('#vac_analytics>.vacansies__border').hide();
        $('#vac_other>.vacansies__border').show();

        vac_all.classList.remove('vacancies__side-item_active');
        vac_test.classList.remove('vacancies__side-item_active');
        vac_dev.classList.remove('vacancies__side-item_active');
        vac_office.classList.remove('vacancies__side-item_active');
        vac_analytics.classList.remove('vacancies__side-item_active');
        vac_other.classList.add('vacancies__side-item_active');

        dev_senior.classList.add('hidden');
        dev_middle.classList.add('hidden');
        analytic_middle.classList.add('hidden');
        test_middle.classList.add('hidden');
        test_junior.classList.add('hidden');
        support.classList.remove('hidden');
        admin.classList.remove('hidden');
        pm.classList.add('hidden');
    }

    // ===============

    $(".vacancies__tiles").hover(function() {

    });

});