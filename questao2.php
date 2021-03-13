<?php

    function db_connect($host, $user, $pass, $db_server){
        return new mysqli($host, $user, $pass, $db_server);
    }


    function questao2() {
        $query = "select
                        tb_banco.nome,
                        tb_convenio.verba,
                        (select MIN(data_inclusao) from tb_contrato 
                            where convenio_servico = tb_convenio_servico.codigo),
                        (select MAX(data_inclusao) from tb_contrato 
                            where convenio_servico = tb_convenio_servico.codigo),
                        (select sum(valor) from tb_contrato 
                            where convenio_servico = tb_convenio_servico.codigo)
                    from tb_banco
                    join tb_convenio on tb_convenio.banco = tb_banco.codigo
                    join tb_convenio_servico on tb_convenio_servico.convenio = tb_convenio.codigo";
        return $this->db_connect->query($query);
    }

?>
