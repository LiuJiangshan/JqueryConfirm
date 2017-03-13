function Confirm(msg, okDo, cancelDo)
{
    var $dialog_msg = $("<div></div>");
    {
        $dialog_msg.attr("class", "dialog_msg");
        $dialog_msg.html(msg);
        $dialog_msg.click(function ()
        {
            event.stopPropagation();
        });
    }

    var $dialog_ok_button = $("<input/>");
    {
        $dialog_ok_button.attr("type", "button");
        $dialog_ok_button.attr("value", "确定");
        $dialog_ok_button.attr("class", "dialog_button dialog_ok_button");
        $dialog_ok_button.click(okDo);
    }
    var $dialog_cancel_button = $("<input/>");
    {
        $dialog_cancel_button.attr("type", "button");
        $dialog_cancel_button.attr("value", "取消");
        $dialog_cancel_button.attr("class", "dialog_button dialog_cancel_button");
        $dialog_cancel_button.click(cancelDo);
    }
    var $dialog_panel = $("<div></div>");
    {
        $dialog_panel.attr("class", "dialog_panel");
    }
    var $dialog = $("<div></div>");
    {
        $dialog.attr("class", "dialog");
        $dialog.click(function ()
        {
            $dialog_panel.animate({width: "0%", height: "0%", top: "50%", left: "50%"}, 100, function ()
            {
                $dialog_panel.remove();
            });
            $dialog.animate({opacity: "0"}, 100, function ()
            {
                $dialog.remove();
            });
        });
    }
    {
        $dialog_msg.appendTo($dialog_panel);
        $dialog_cancel_button.appendTo($dialog_panel);
        $dialog_ok_button.appendTo($dialog_panel);
        $dialog_panel.appendTo($dialog);
        $dialog.appendTo($("body"));
    }
}